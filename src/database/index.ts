import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
});

dataSource.initialize();
