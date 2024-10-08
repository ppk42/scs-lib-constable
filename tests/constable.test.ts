/**
 * @jest-environment jsdom
 */

import { createTable, ConsTable } from "../src/constable";

let testnumber = 1;

describe("createTable function", () => {
  // TEST_KEY is used for id or name
  test(`${testnumber++}:: createTable delivers a ConstructableTable instance.`, () => {
    let testkey = `test_object_${testnumber}`;
    const testTable = createTable(testkey);
    expect(testTable).toBeInstanceOf(ConsTable);
  });
});
