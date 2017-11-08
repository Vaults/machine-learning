//Dependencies
const SYNAPTIC = require("synaptic");
const Neuron = SYNAPTIC.Neuron,
    Layer = SYNAPTIC.Layer,
    Network = SYNAPTIC.Network,
    Trainer = SYNAPTIC.Trainer,
    Architect = SYNAPTIC.Architect;

//lets do it bb
require("./snippets/xor.js")();
xor(Neuron, Layer, Network, Trainer, Architect);

