// 'use strict';
// var chai = require('chai');
// var request = require('request');
// var expect = chai.expect;

// require('dotenv').load();

// describe('/{locale}/graph/relationships/update/{id}', function() {
//   describe('get', function() {
//     it('should respond with 200 Success', function(done) {
//       request({
//         url: 'https://localhost:10011/{locale PARAM GOES HERE}/graph/relationships/update/{id PARAM GOES HERE}',
//         method: 'GET',
//         headers: {
//           'Content-Type': 'text/html'
//         }
//       },
//       function(error, res, body) {
//         if (error) return done(error);

//         expect(res.statusCode).to.equal(200);

//         expect(body).to.equal(null); // non-json response or no schema
//         done();
//       });
//     });

//     it('should respond with default Error', function(done) {
//       request({
//         url: 'https://localhost:10011/{locale PARAM GOES HERE}/graph/relationships/update/{id PARAM GOES HERE}',
//         method: 'GET',
//         headers: {
//           'Content-Type': 'text/html'
//         }
//       },
//       function(error, res, body) {
//         if (error) return done(error);

//         expect(res.statusCode).to.equal('DEFAULT RESPONSE CODE HERE');

//         expect(body).to.equal(null); // non-json response or no schema
//         done();
//       });
//     });

//   });

//   describe('post', function() {
//     it('should respond with 200 Success', function(done) {
//       request({
//         url: 'https://localhost:10011/{locale PARAM GOES HERE}/graph/relationships/update/{id PARAM GOES HERE}',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           Authorization: 'Basic ' + process.env.LOCAL_AUTH
//         },
//         form: {
//           type: 'DATA GOES HERE',
//           property: 'DATA GOES HERE',
//           rating: 'DATA GOES HERE'
//         }
//       },
//       function(error, res, body) {
//         if (error) return done(error);

//         expect(res.statusCode).to.equal(200);

//         expect(body).to.equal(null); // non-json response or no schema
//         done();
//       });
//     });

//     it('should respond with default Error', function(done) {
//       request({
//         url: 'https://localhost:10011/{locale PARAM GOES HERE}/graph/relationships/update/{id PARAM GOES HERE}',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           Authorization: 'Basic ' + process.env.LOCAL_AUTH
//         },
//         form: {
//           type: 'DATA GOES HERE',
//           property: 'DATA GOES HERE',
//           rating: 'DATA GOES HERE'
//         }
//       },
//       function(error, res, body) {
//         if (error) return done(error);

//         expect(res.statusCode).to.equal('DEFAULT RESPONSE CODE HERE');

//         expect(body).to.equal(null); // non-json response or no schema
//         done();
//       });
//     });

//   });

// });
