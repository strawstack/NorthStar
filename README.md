# NorthStar

A system for solving Advent of Code in the browser.

# Bookmarklet

![northstar](javascript:(function()%7Bfunction%20runWithPeer(userFunction%2C%20second%2C%20third)%20%7B%0A%20%20%20%20document.querySelectorAll(%22.northstar%22).forEach(e%20%3D%3E%20e.remove())%3B%0A%20%20%20%20const%20script%20%3D%20document.createElement(%22script%22)%3B%0A%20%20%20%20script.type%20%3D%20%22module%22%3B%0A%20%20%20%20script.className%20%3D%20'northstar'%3B%0A%20%20%20%20const%20importPeer%20%3D%20%60import%20%7BPeer%7D%20from%20%22https%3A%2F%2Fesm.sh%2Fpeerjs%401.5.4%3Fbundle-deps%22%3B%5Cn%60%3B%0A%20%20%20%20let%20funct%20%3D%20userFunction.toString()%0A%20%20%20%20%20%20.replace(%22SECOND%22%2C%20second)%0A%20%20%20%20%20%20.replace(%22THIRD%22%2C%20third)%3B%0A%20%20%20%20script.innerHTML%20%3D%20%60%24%7BimportPeer%7D(%24%7Bfunct%7D)()%3B%60%3B%0A%20%20%20%20document.body.appendChild(script)%3B%0A%20%20%7D%0A%20%20%0A%20%20function%20buildFunctionCall(funct%2C%20arg)%20%7B%0A%20%20%20%20%20%20arg%20%3D%20(arg)%20%3F%20arg%20%3A%20%22%22%3B%0A%20%20%20%20return%20%60(%24%7Bfunct.toString()%7D)(%24%7Barg%7D)%60%3B%0A%20%20%7D%0A%20%20%0A%20%20function%20northStar(userFunction%2C%20pid)%20%7B%0A%20%20%20%20%20%20let%20Peer%20%3D%20()%20%3D%3E%20%7B%7D%3B%20%2F%2F%20temp%20def%0A%20%20%20%20%20%20let%20SECOND%20%3D%20%22%22%3B%20%2F%2F%20temp%20def%0A%20%20%20%20%20%20if%20(pid)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20Connect%20with%20peer%20and%20call%20userFunction%20with%20response%0A%20%20%20%20%20%20%20%20%20%20runWithPeer(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20peer%20%3D%20new%20Peer()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20peer.on('open'%2C%20_%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20conn%20%3D%20peer.connect(%22SECOND%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20conn.on('data'%2C%20(data)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20THIRD%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20pid%2C%20buildFunctionCall(userFunction%2C%20'data'))%3B%0A%20%20%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20Listen%20for%20connection%20and%20respond%20with%20userFunction%0A%20%20%20%20%20%20%20%20%20%20runWithPeer(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20peer%20%3D%20new%20Peer()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20peer.on('open'%2C%20(id)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(id)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20peer.on('connection'%2C%20(conn)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20conn.on('open'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20conn.send(SECOND)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%20buildFunctionCall(userFunction))%3B%0A%20%20%20%20%20%20%7D%0A%20%20%7D%7D)()%3B)
