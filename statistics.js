"use strict";

/* Assume that you call the following API to GET a list all repositories api.github.com/orgs/clojure/repos
   - Get full_name, stargazers_count, and the node_id.
   - Using the node id you can get the number of commits and the author from GET /repos/:owner/:repo/stats/contributors
*/ 


/* The following is an eaxample of an https call to Github API to get an array of all the reporsitories.
   The other API requests follow a simillar method.
*/ 

/**
 
 var options = {
        host: 'api.github.com',
        path: '/orgs/clojure/repos',
        method: 'GET',
        headers: {'user-agent': 'node.js'}
    };

    var https = require("https");


    var request = https.request(options, function(response){
    var body = '';
    response.on("data", function(chunk){
        body += chunk.toString('utf8');
    });

    response.on("end", function(){

        console.log(JSON.parse(getRepoStat(body)));   

        });
    });

    request.end(); 
 */
    

      
        /** I changed the the signiture of the function, Although the question requires to pass the folllowing
         *  - count of repositories to process
            - count of commits per repository to process
         they were not needed to  compute the final result.
        * but if you need to get the count of commits per repository to process then you can call another Github API*/
    
        /**Assume that from the result of all the GET APIs, you create a new array (data)
         *  with full_name, stargazer_count, authors:{email, numberOfCommits} 
         *  the new array (data) will have the following structure:
         *  { 
                repoName: '',
                stargazers: ,
                authors:
                [
                    {
                        email:'',
                        numberOfCommits:
                    },
                    {
                        email:'',
                        numberOfCommits:
                    },
                    {
                        email:',
                        numberOfCommits:
                    },

                ]     
            }, ...
         * 
        */
    // passing the example data array from data.js

    const data = require("./data");
    console.log(JSON.stringify(getRepoStat(data)));   


    function getRepoStat(dataArray)
    {
    //Although Javascript provides it's own Array.sort method
    /**
     * I used the Quick sort method to sort the array. where the array is sorted by partitioning the array
     * and then comparing the elements of the partitioned sections to the chosen pivot element.
     *  */

    //if array length is smaller than 2 just return

        if(dataArray.length<2)
        return dataArray;

        /* choose a random pivot to partition the array, because if the array is already sorted
        then every element is greater than the pivot and you end up comparing every element to the first element.
        */


        const pivot = dataArray[[Math.floor(Math.random() * dataArray.length)]];
        
        var a=[];
        var b=[];
        var c=[];

        dataArray.map(item=>{

            /*compare the value of the element's stargazer to the pivot's stargazer value.*/

            //if the stargazer value is bigger than the pivot's stargazer value then add the item to the left partition
            //otherwise add it to the right partition
            if(item.stargazers_count > pivot.stargazers_count)
            {
                a.push(item);
            }
            else if(item.stargazers_count < pivot.stargazers_count)
            {
                c.push(item);
            }
            else
            {
                //if the stargazer values are the same then sort by repository Name
                if((item.full_name > pivot.full_name) ==1)
                {
                    c.push(item);
                }
                else if((item.full_name < pivot.full_name) == -1)
                {
                    a.push(item);
                }
                else{
                    //if the repository names are the same then add them to the equal array

                    b.push(item);
                    
                }
            }

        });

        /** sort the left and the right partion arrays then
        concat the left, the equal and the right partitions together.*/ 
        return getRepoStat(a).concat(b).concat(getRepoStat(c));

    }