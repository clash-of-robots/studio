import { connect } from 'react-redux';
import FileList from '../components/files/file-list';

const mapStateToProps = (state) => ({
  files: state.studio.files.items,
  selected: state.studio.files.selected,
});

const mapDispatchToProps = () => ({

});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileList);
