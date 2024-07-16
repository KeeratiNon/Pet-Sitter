import sql from "../utils/db.mjs";

export const createPetsitterProfile = async (req, res) => {
  const { id: params } = req.params;

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
    created_at: new Date(),
    updated_at: new Date()
  };

  try {
    const results = await sql`
      WITH updated_pet_sitter AS (
        UPDATE pet_sitters
        SET phone_number = ${petsitter.phone_number}, email = ${petsitter.email}, updated_at = ${petsitter.updated_at}
        WHERE id = ${params}
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

    return res.status(201).json({
      message: "Petsitter Profile has been created.",
      data: results,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error", error });
  }
};