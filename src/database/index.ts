import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "database_ignite",
    username: "docker",
    password: "ignite",
    database: "rentx",
});

dataSource.initialize();
