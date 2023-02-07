import styles from '../../styles/Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '@/store/counterSlice';
import { RootState } from '@/store/store';
const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

    return (
        
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className={`card ${styles.back}`} style={{width: "24rem"}}>
                    
                        <div className="card-body">
                            <h5 className="card-title text-center">Counter App</h5>
                           <h1 className='text-center pt-5 '>{count}</h1>
                           <div style={{ padding: '10px 20px', marginRight: '10px' }} className="mt-5 mb-5">

                           
                           <button type="button" className="btn btn-outline-primary" onClick={() => dispatch(increment())}>Increament</button>
                           <button type="button" className={`btn btn-outline-secondary ${styles.padleft}` } onClick={()=> dispatch(decrement())}>Decreament</button>
                           </div>
                        </div>
                </div>

            </div>

        </div>
    )
}
export default Counter;