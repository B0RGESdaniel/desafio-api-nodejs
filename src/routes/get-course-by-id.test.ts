import { test, expect } from "vitest";
import request from "supertest";
import { server } from "../app.ts";
import { makeCourse } from "../tests/factories/make-course.ts";

test("get a course by id", async () => {
  await server.ready();

  const course = await makeCourse();

  const response = await request(server.server).get(`/courses/${course.id}`);

  expect(response.status).toEqual(200);
  expect(response.body).toEqual({
    course: {
      id: expect.any(String),
      title: expect.any(String),
      description: null,
    },
  });
});

test("return 404 for non existing courses", async () => {
  await server.ready();

  const course = await makeCourse();

  const response = await request(server.server).get(
    `/courses/d612c1f4-3bc3-4449-96dd-d2fab44d20bf`
  );

  expect(response.status).toEqual(404);
});
