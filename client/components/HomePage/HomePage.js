import React, {Component} from 'react';
import { get } from '../../utils/fetch';
import { renderIfElse } from '../../utils/helpers';
import Loading from '../Loading';

class HomePage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.timer();
  }

  timer = () => {
    {setTimeout(()=>{
      this.props.setLoading(false)
    },3000)}
  }

  render(){
    return (
      <div>
        {renderIfElse(() => !this.props.loading,
          () => <div> hello </div>,
          () => <Loading />
        )}
      </div>
    )
  }
}
export default HomePage;
