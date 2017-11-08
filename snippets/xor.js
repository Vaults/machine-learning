function xor(Neuron, Layer, Network, Trainer, Architect){
    const input = new Layer(2);
    const hidden = new Layer(3);
    const output = new Layer(1);

    input.project(hidden);
    hidden.project(output);

    const network = new Network({input, hidden:[hidden], output});

    const learningRate = .3;
    const trainingSamples = 200000;

    const xor = (x, y) => +(x ? !y : y);
    const xorActivate = (x, y) => network.activate([x, y]);
    const xorTrain = function(x, y){
        xorActivate(x, y);
        network.propagate(learningRate, [xor(x, y)]);
    }

    for (let i = 0; i < trainingSamples; i++) {
        xorTrain(0, 0);
        xorTrain(0, 1);
        xorTrain(1, 1);
        xorTrain(1, 0);
    }

    console.log(
        JSON.stringify({
                "0 xor 0": xorActivate(0,0)[0],
                "0 xor 1": xorActivate(0,1)[0],
                "1 xor 0": xorActivate(1,0)[0],
                "1 xor 1": xorActivate(1,1)[0],
            },null, '\t'
    ));
}


module.exports = function(){
    this.xor = xor;
}