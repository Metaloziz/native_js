import React from 'react'
import './lesson_4';
import {CreatePromise, RejectPromise, ResolvePromise} from "./lesson_4";

const Lesson4 = () => {


    return (
        <div>
            <button onClick={CreatePromise} id='btn-create-promise'>Create Promise
            </button>
            <button onClick={ResolvePromise} id='btn-resolve-promise'>Resolve Promise
            </button>
            <button onClick={RejectPromise} id='btn-reject-promise'>Reject Promise
            </button>
        </div>
    );
}

export default Lesson4;