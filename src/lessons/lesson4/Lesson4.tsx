import React from 'react'
import {CreatePromise, RejectPromise, ResolvePromise} from "./lesson_4";

export const Lesson4 = () => {

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

