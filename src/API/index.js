const cohortName = '2302-ACC-PT-WEB-PT-A';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

module.exports = {
    cohortName,
    APIURL,
};

//Import to other files by using const {} = require(./API/index.js)