import sql from "../utils/db.mjs";

export const createPetsitterProfile = async (req, res) => {
  const param = req.params.id;

  const {
    profile_image,
    first_name,
    last_name,
    experience,
    phone_number,
    email,
    introduction,
    bank,
    account_number,
    petsitter_name,
    pet_type,
    services,
    my_place,
    image_gallery,
    address_detail,
    district,
    sub_district,
    province,
    post_code,
  } = req.body;

  const petsitter = {
    ...req,
    body,
    created_at: new Date(),
    updated_at: new Date(),
  };

  let results;

  try {
    results = await sql`
      WITH updated_pet_sitter AS (
        UPDATE pet_sitters
        SET phone_number = ${petsitter.phone_number}, email = ${petsitter.email}, updated_at = ${petsitter.updated_at}
        WHERE id = ${param}
        RETURNING id
      ),
      inserted_profile AS (
        INSERT INTO pet_sitter_profiles (
          profile_image, firstname, lastname, experience, introduction, bank, account_number, pet_sitter_name, pet_type, services, my_place, image_gallery, updated_at, pet_sitter_id
        )
        VALUES (
          ${petsitter.profile_image}, ${petsitter.first_name}, ${petsitter.last_name}, ${petsitter.experience}, ${petsitter.introduction}, ${petsitter.bank}, ${petsitter.account_number}, ${petsitter.petsitter_name}, ${petsitter.pet_type}, ${petsitter.services}, ${petsitter.my_place}, ${petsitter.image_gallery}, ${petsitter.updated_at}, (SELECT id FROM updated_pet_sitter)
        )
        RETURNING id
      )
      INSERT INTO pet_sitter_address (
        address_detail, district, sub_district, province, post_code, updated_at, pet_sitter_profile_id
      )
      VALUES (
        ${petsitter.address_detail}, ${petsitter.district}, ${petsitter.sub_district}, ${petsitter.province}, ${petsitter.post_code}, ${petsitter.updated_at}, (SELECT id FROM inserted_profile)
      )
      RETURNING *;
    `;
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
  return res.status(201).json({
    message: "Petsitter Profile has been created.",
    data: results,
  });
};

export const searchPetsitterProfile = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const offset = (page - 1) * pageSize;
    const searchText = req.query.q || "";
    const selectedRatings = Array.isArray(req.query.rating)
      ? req.query.rating
      : req.query.rating ? req.query.rating.split(',') : [];
    const years = req.query.experience || "";
    const selectedPet = req.query.pet_type ? req.query.pet_type.split(",") : [];

    const totalResultsQuery =  sql`
    SELECT COUNT(*) AS count
      FROM pet_sitter_profiles
      INNER JOIN pet_sitter_address 
      ON pet_sitter_profiles.id = pet_sitter_address.pet_sitter_profile_id
      WHERE (
        pet_sitter_profiles.pet_sitter_name ILIKE ${`%${searchText}%`}
        OR pet_sitter_profiles.firstname ILIKE ${`%${searchText}%`}
        OR pet_sitter_profiles.lastname ILIKE ${`%${searchText}%`}
        OR pet_sitter_address.district ILIKE ${`%${searchText}%`}
        OR pet_sitter_address.province ILIKE ${`%${searchText}%`}
      )
      ${
        selectedRatings.length > 0
      ? sql`AND pet_sitter_profiles.rating = ANY(${sql.array(selectedRatings)})`
      : sql``
      }
      ${
        years
          ? sql`AND pet_sitter_profiles.experience ILIKE ${`%${years}%`}`
          : sql``
      }
      ${       
        selectedPet.length > 0
          ? sql`AND EXISTS (SELECT 1 FROM UNNEST(pet_sitter_profiles.pet_type) AS pet WHERE pet = ANY(${sql.array(selectedPet)}))`
          : sql``
      }
    `;
    const totalResults = await totalResultsQuery;
    const totalCount = totalResults[0].count;

    const resultsQuery = sql`
  SELECT
        pet_sitter_profiles.pet_sitter_id,
        pet_sitter_profiles.pet_sitter_name,
        pet_sitter_profiles.firstname,
        pet_sitter_profiles.lastname,
        pet_sitter_profiles.profile_image,
        pet_sitter_profiles.image_gallery,
        pet_sitter_profiles.pet_type,
        pet_sitter_profiles.rating,
        pet_sitter_profiles.experience,
        pet_sitter_address.district,
        pet_sitter_address.province
      FROM
        pet_sitter_profiles
      INNER JOIN
        pet_sitter_address ON pet_sitter_profiles.id = pet_sitter_address.pet_sitter_profile_id
      WHERE (
        pet_sitter_profiles.pet_sitter_name ILIKE ${`%${searchText}%`}
        OR pet_sitter_profiles.firstname ILIKE ${`%${searchText}%`}
        OR pet_sitter_profiles.lastname ILIKE ${`%${searchText}%`}
        OR pet_sitter_address.district ILIKE ${`%${searchText}%`}
        OR pet_sitter_address.province ILIKE ${`%${searchText}%`}
      )
      ${
        selectedRatings.length > 0
      ? sql`AND pet_sitter_profiles.rating = ANY(${sql.array(selectedRatings)})`
      : sql``
      }
      ${
        years
          ? sql`AND pet_sitter_profiles.experience ILIKE ${`%${years}%`}`
          : sql``
      }
      ${

        selectedPet.length > 0
          ? sql`AND EXISTS (SELECT 1 FROM UNNEST(pet_sitter_profiles.pet_type) AS pet WHERE pet = ANY(${sql.array(selectedPet)}))`
          : sql``
      }
      LIMIT ${pageSize} OFFSET ${offset}
    `;
const results = await resultsQuery;

    return res.status(200).json({
      message: "Pet sitter Profile has been show.",
      data: results,
      currentPage: page,
      pageSize: pageSize,
      total: totalCount,
    });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
    
  }
};

export const viewPetsitterProfile = async (req, res) => {
  const param = req.params.id;

  let results;
  try {
    results = await sql` 
          SELECT *
          FROM pet_sitters
          INNER JOIN pet_sitter_profiles on pet_sitter_profiles.pet_sitter_id = pet_sitters.id
          INNER JOIN pet_sitter_address on pet_sitter_address.pet_sitter_profile_id = pet_sitter_profiles.id
          WHERE pet_sitters.id = ${param}
          `;
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
  if (results.length > 0) {
    return res.status(200).json({
      message: "Petsitter Profile found",
      data: results[0],
    });
  } else {
    return res.status(404).json({
      message: "Petsitter Profile not found",
    });
  }
};

export const updatePetsitterProfile = async (req, res) => {
  const param = req.params.id;

  const {
    profile_image,
    first_name,
    last_name,
    experience,
    phone_number,
    email,
    introduction,
    bank,
    account_number,
    petsitter_name,
    pet_type,
    services,
    my_place,
    image_gallery,
    address_detail,
    district,
    sub_district,
    province,
    post_code,
  } = req.body;

  const petsitter = {
    ...req.body,
    updated_at: new Date(),
  };

  let results;

  try {
    results = await sql`
        WITH updated_pet_sitter AS (
          UPDATE pet_sitters
          SET phone_number = ${petsitter.phone_number}, email = ${petsitter.email}, updated_at = ${petsitter.updated_at}
          WHERE id = ${param}
          RETURNING id
        ),
        updated_profile AS (
          UPDATE pet_sitter_profiles
          SET profile_image = ${petsitter.profile_image}, firstname = ${petsitter.first_name}, lastname = ${petsitter.last_name}, experience = ${petsitter.experience}, introduction = ${petsitter.introduction}, bank = ${petsitter.bank}, account_number = ${petsitter.account_number}, pet_sitter_name = ${petsitter.petsitter_name}, pet_type = ${petsitter.pet_type}, services = ${petsitter.services}, my_place = ${petsitter.my_place}, image_gallery = ${petsitter.image_gallery}, updated_at = ${petsitter.updated_at}
          WHERE pet_sitter_id = ${param}
          RETURNING id
        )
        UPDATE pet_sitter_address
        SET address_detail = ${petsitter.address_detail}, district = ${petsitter.district}, sub_district = ${petsitter.sub_district}, province = ${petsitter.province}, post_code = ${petsitter.post_code}, updated_at = ${petsitter.updated_at}
        WHERE pet_sitter_profile_id = (SELECT id FROM updated_profile)
        RETURNING *;
      `;
    console.log(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", error });
  }
  return res.status(200).json({
    message: "Petsitter Profile has been updated.",
    data: results,
  });
};

export const checkPetsitterProfile = async (req, res) => {
  const param = req.params.id;

  try {
    const results = await sql`
        SELECT 1
        FROM pet_sitter_profiles
        WHERE pet_sitter_id = ${param}
        LIMIT 1;
      `;
    const profileExists = results.length > 0;
    res.status(200).json({ exists: profileExists });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
