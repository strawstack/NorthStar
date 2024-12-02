function runWithPeer(userFunction, second, third) {
    document.querySelectorAll(".northstar").forEach(e => e.remove());
    const script = document.createElement("script");
    script.type = "module";
    script.className = 'northstar';
    const importPeer = `import {Peer} from "https://esm.sh/peerjs@1.5.4?bundle-deps";\n`;
  	let funct = userFunction.toString()
    	.replace("SECOND", second)
    	.replace("THIRD", third);
    script.innerHTML = `${importPeer}(${funct})();`;
    document.body.appendChild(script);
  }
  
  function buildFunctionCall(funct, arg) {
      arg = (arg) ? arg : "";
    return `(${funct.toString()})(${arg})`;
  }
  
  function northStar(userFunction, pid) {
      let Peer = () => {}; // temp def
    	let SECOND = ""; // temp def
      if (pid) {
          // Connect with peer and call userFunction with response
          runWithPeer(() => {
            const peer = new Peer();
            peer.on('open', _ => {
              const conn = peer.connect("SECOND");
              conn.on('data', (data) => {
                THIRD
              });
            });
      		}, pid, buildFunctionCall(userFunction, 'data'));
  
      } else {
          // Listen for connection and respond with userFunction
          runWithPeer(() => {
            const peer = new Peer();
            peer.on('open', (id) => {
              console.log(id);
            });
            peer.on('connection', (conn) => {
              conn.on('open', () => {
                  conn.send(SECOND);
              });
          });
      }, buildFunctionCall(userFunction));
      }
  }
  
//   // input page
//   northStar(() => {
//       return document.body.querySelector("pre").innerHTML;
//   });
  
// // solution page
// northStar((data) => {
//   console.log(data);
// }, "94714bd3-0177-4ab6-bf3a-9a68fee9a97c");
  