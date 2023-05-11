import * as dotenv from 'dotenv';

export const loadEnvironmentVariables = () => {
    if (dotenv.config().error) throw new Error('Please add .env file into root project');
}