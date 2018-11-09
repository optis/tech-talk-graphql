# GraphQL example

## Backend

The backend is developed using Spring boot 2, the GraphQL Java implementation and the Spring boot starter.

### Installation

No additional installation is necessary before being able to run the application. However, you can always load the dependencies and generate the JAR file using the following command:

```
./mvnw clean package
```

### Configuration

The backend can be ran properly without any additional configuration. However, the demo code used a hardcoded profile ID to store new questions and answers. So to make this example work, it's recommended to create a file called **tech-talk-api/src/main/resources/data.sql** and to include the following content:

```sql
INSERT INTO profile (id, username, title, email, bio) VALUES
  (1, 'g00glen00b', 'Software engineer', 'me@example.org', 'Consultant at Cronos and Tech lead at Aquafin. Usually you can find me trying out new libraries and technologies. Loves both Java and JavaScript.');
```

Obviously, you're free to change the data to whatever you'd like.

### Running

To run the application, you can use the following Maven command:

```
./mvnw spring-boot:run
```

This will compile the application and run it at port 8080.

## Frontend

The frontend is developed using Angular 7 and Apollo GraphQL.

### Installation

To install the required dependencies, you can use the following command:

```
npm install
```

### Configuration

No additional configuration is required.

### Running

To run the application, you can use the following npm script:

```
npm start
```

## Snippets
The following snippets have been used during the presentation:

### Type definition

```graphql
type Organization {
    id: ID!
    name: String
    employees: [Employee]
    employeeCount: Int
}
```

### Query type definition

```graphql
type Query {
    organizations(offset: Int, limit: Int): [Organization]
    organization(id: ID!): Organization
    organizationCount: Int
    employees(offset: Int, limit: Int): [Employee]
    employee(id: ID): Employee
    employeeCount: Int
}
```

### Mutation type definition

```graphql
type Mutation {
    createOrganization(input: OrganizationInput!): Organization
    deleteOrganization(id: ID!): Boolean
}
```

### Input type definition

```graphql
input OrganizationInput {
    name: String
}
```

### Java resolver

```java
public int getEmployeeCount(Organization organization) {
    return employeeRepo.countByOrganization(organization);
}
```

### JavaScript resolver

```javascript
return {
  employeeCount: ({id}) => Employee.count({organization: id})
};
```

### Querying

```graphql
query AllOrganizations($offset: Int, $limit: Int) {
    organizations(offset: $offset, limit: $limit) {
        id
        name
        employeeCount
    }
}
```

````json
{"offset": 0, "limit": 10}
````