import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PanelModule } from './panel/panel.module';
import { SkillModule } from './skill/skill.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import appConfig from './config/app.config';
import { AppController } from './app.controller';
import { MyInfoModule } from './myinfo/myinfo.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST || 'postgres-db',
        port: +process.env.DATABASE_PORT || 5432,
        username: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        database: process.env.DATABASE_NAME || 'postgres',
        entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
        migrationsRun: false,
        logging: true,
        migrationsTableName: 'migration',
        migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
        synchronize: false,
        cli: {
          migrationsDir: 'src/migration'
        }
      }),
    }),
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    PanelModule,
    SkillModule,
    AuthModule,
    UsersModule,
    MyInfoModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
