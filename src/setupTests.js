import Enzyme, { configure } from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');

const adapter = new Adapter();
Enzyme.configure({ adapter });
configure({ adapter });