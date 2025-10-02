import Header from './components/Header';
import AddForm from './components/AddForm/AddForm';
import TasksList from './components/TasksList';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/reset.css';

function main() {
  Header();
  AddForm();
  TasksList();
  Footer();
}

main();
