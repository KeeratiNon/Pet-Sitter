import sql from "../utils/db.mjs";

export const createUserProfile = async (req, res) => {
  const newUserProfile = {
    ...req.body,
    created_at: new Date(),
    updated_at: new Date(),
  };

  let result;

  try {
    result =
      await sql`insert into user_profiles (firstname, lastname, id_number, email, date_of_birth, created_at, updated_at, image)
      values (${newUserProfile.first_name}, ${newUserProfile.last_name}, ${newUserProfile.id_number}, ${newUserProfile.email}, ${newUserProfile.date_of_birth}, ${newUserProfile.created_at}, ${newUserProfile.updated_at}, ${newUserProfile.image})
        returning *`;
  } catch {
    return res.status(500).json({
      message: `Server could not bacause database connection`,
    });
  }

  return res.status(201).json({
    message: `User profile created successfully`,
    data: result,
  });
};

export const createPet = async (req, res) => {
  const newPet = {
    ...req.body,
    created_at: new Date(),
    updated_at: new Date(),
  };

  let result;

  try {
    result =
      await sql`insert into pets (pet_name, pet_type, breed, sex, age, color, weight, about, image, created_at, updated_at)
      values (${newPet.pet_name}, ${newPet.pet_type}, ${newPet.breed}, ${newPet.sex}, ${newPet.age}, ${newPet.color}, ${newPet.weight}, ${newPet.about}, ${newPet.image}, ${newPet.created_at}, ${newPet.updated_at})
      returning *`;
  } catch {
    return res.status(500).json({
      message: `Server could not bacause database connection`,
    });
  }

  return res.status(201).json({
    message: `Pet create successfully`,
    data: result,
  });
};

export const updatePet = async (req, res) => {
  const petId = req.params.petId;
  const updatePet = { ...req.body, updated_at: new Date() };
  let result;

  try {
    result = await sql`
    update pets
    set pet_name = ${updatePet.pet_name},
        pet_type = ${updatePet.pet_type},
        breed = ${updatePet.breed},
        sex = ${updatePet.sex},
        age = ${updatePet.age},
        color = ${updatePet.color},
        weight = ${updatePet.weight},
        about = ${updatePet.about},
        image = ${updatePet.image},
        updated_at = ${updatePet.updated_at}
    where id = ${petId}
    returning *`;
  } catch {
    return res.status(500).json({
      message: `Server could not bacause database connection`,
    });
  }

  return res.status(200).json({
    message: `Pet update successfully`,
    data: result,
  });
};

export const deletePet = async (req, res) => {
  const petId = req.params.petId;

  try {
    await sql`
    delete from pets
        where id = ${petId}`;
  } catch {
    return res.status(500).json({
      message: `Server could not bacause database connection`,
    });
  }

  return res.status(200).json({
    message: `Pet delete successfully`,
  });
};

export const selectAllPet = async (req, res) => {
  let result;

  try {
    result = await sql`select * from pets`;
  } catch {
    return res.status(500).json({
      message: `Server could not bacause database connection`,
    });
  }

  if (!result) {
    return res.status(404).json({
      message: `The reason the data could not be located was that it was never stored in the database you asked for`,
    });
  }

  return res.status(200).json({
    data: result,
  });
};
