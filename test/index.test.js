const sut = require ("../src/index")
const supertest = require("supertest")

describe("verifies all the endpoints", () =>{
    it("should return hello darkness", async() =>{
        //Arrange 
        const request = supertest(sut)
        const expectedResult = "Hello Darkness!"

        // Act
        const result = await request.get("/")
        const actualResult = result.text

        // Assert
        expect(actualResult).toContain(expectedResult)
    })
})
