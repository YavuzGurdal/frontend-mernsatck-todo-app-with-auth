import { MdOutlineDeleteForever, MdOutlineEdit, MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'

const TodoItem = () => {
    return (
        <div className="todo">
            {/* <h2>{goal.text}</h2> */}
            {/* <h2>todo 1</h2> */}
            <div className="radio-buttons">
                <MdOutlineRadioButtonUnchecked size={25} />
                <MdOutlineRadioButtonChecked size={25} />
            </div>

            <div>
                {/* <p style={{ color: '#d3cdf9' }}>a days ago</p> */}
                <p style={{ color: '#7b68ee' }}>a days ago</p>
                <h3>todo 1 wh wr hwe rg q bv qet bq b  tb</h3>
                {/* {moment(goal.createdAt).fromNow()}
                {new Date(goal.createdAt).toLocaleString('en-US')} */}
            </div>
            <div className="button-updates">
                {/* <button
                    className="update"
                // onClick={() => setUpdateCurrentId(goal._id)}
                >
                    <FiEdit size={30} color='#7b68ee' />
                </button> */}
                <button
                    className="update"
                // onClick={() => setUpdateCurrentId(goal._id)}
                >
                    <BiEdit size={30} color='#7b68ee' />
                </button>
                {/* <button
                    className="update"
                // onClick={() => setUpdateCurrentId(goal._id)}
                >
                    <FaRegEdit size={30} color='#7b68ee' />
                </button>
                <button
                    className="update"
                // onClick={() => setUpdateCurrentId(goal._id)}
                >
                    <MdOutlineEdit size={30} color='#7b68ee' />
                </button> */}
                <button
                    className="close"
                // onClick={() => dispatch(deleteGoal(goal._id))}
                >
                    {/* <MdOutlineDeleteForever size={30} color='#dc3545' /> */}
                    <MdOutlineDeleteForever size={30} color='#e04f44' />
                </button>
            </div>
        </div>
    )
}

export default TodoItem