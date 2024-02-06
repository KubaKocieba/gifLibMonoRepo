/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from "@nestjs/core";
import * as bodyParser from "body-parser";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  app.use(bodyParser.json({ limit: "15mb" }));
  app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }));
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(
      "Listening at http://host.docker.internal:" + port + "/" + globalPrefix
    );
  });
}

bootstrap();
