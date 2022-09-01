/**
 * https://github.com/redis/node-redis#basic-example
 * https://github.com/redis/node-redis#redis-commands
 * https://redis.io/commands/hmset
 * https://redis.io/commands/hset
 * https://redis.io/commands/hgetall
 * https://github.com/redis/node-redis#quitquit
 * */

import { createClient } from "../node_modules/redis/dist/index.js";

const task = process.argv[2];
let client;

(async () => {
  client = createClient();
  client.on("error", (e) => console.error(e));

  await client.connect();

  try {
    if (!task) {
      listTasks(client);
    } else {
      addTask(client, task);
    }
  } catch (e) {
    console.error(e);
  }
})();

async function addTask(redisClient, task) {
  await redisClient.hSet(
    `Task: ${Math.random().toString(32).replace(".", "")}`,
    {
      task,
    }
  );

  listTasks(redisClient);
}

async function listTasks(redisClient) {
  const keys = await redisClient.keys("Task:*");

  for (const key of keys) {
    try {
      const { task } = await redisClient.hGetAll(key);

      console.log(task);
    } catch (e) {
      console.error(e);
    }
  }

  await redisClient.quit();
}
