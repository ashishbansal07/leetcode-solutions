/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let prereqObj = {};
    let visited = {};
    
    for(let i=0;i<prerequisites.length;i++) {
        let current = prerequisites[i];
        if(prereqObj[current[0]]) {
            prereqObj[current[0]].push(current[1].toString())
        }else {
            prereqObj[current[0]] = [current[1].toString()];
        }
    }
    
    const dfs = (node) => {
        if(visited[node]) {
            return false;
        }
        
        
        if(prereqObj[node] != undefined) {
            if(prereqObj[node].length == 0){
                return true;
            }
            visited[node] = true;

            for(let dep of prereqObj[node]) {
                if(!dfs(dep)) {
                    return false;
                }
            }
            visited[node] = false;
            prereqObj[node] = [];
        }
        
        return true;
    }
    
    
    
    for(let key in prereqObj) {
        if(!dfs(key)) {
            return false;
        }
    }
    
    return true;
};