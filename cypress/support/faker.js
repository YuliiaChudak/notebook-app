import faker from 'faker'

export const mockPersonData = () => ({
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    patronymic: faker.lorem.word(),
    birthday: faker.date.past().toISOString().split('T')[0],
    occupation: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber().toString(),
    location: {
        country: faker.address.country(),
        city: faker.address.city(),
        address: faker.address.streetAddress()
    }
});
