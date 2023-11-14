import { proxy } from "valtio";

const state = proxy({
    color: '#EFBD48',
    fullDecal: '/mesh.jpg',
});

export default state;