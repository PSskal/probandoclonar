import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { TodoContext } from '../containers/TodoContext'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function AddModal() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoValue2, setNewTodoValue2] = React.useState("");
    const {
        addTodo,
        openModal,
        setOpenModal,
       
      } = React.useContext(TodoContext) 

    function closeModal() {
        setOpenModal(false)
    }

    function onChange(event) {
        setNewTodoValue(event.target.value);
        
      }
    
    function onChange2(event) {
        setNewTodoValue2(event.target.value);
        
      }
  
    function onSubmit(event) {
      event.preventDefault();
      addTodo(newTodoValue,newTodoValue2)
      setOpenModal(false)

    }

  return (
    <Transition appear show={openModal} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h4"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Add
              </Dialog.Title>
              <div className="mt-2">
                <textarea 
                value={newTodoValue}
                onChange={onChange}
                className="text-sm text-gray-500 w-full px-8 p-1.5 rounded-xl"
                placeholder='add to new task'
                />
                <p className='text-lg font-medium leading-6 text-gray-900'>Time</p>
                <input
                className='px-8 p-1.5 text-gray-500 rounded-xl'
                type="number"
                placeholder='hr to goal'
                onChange={onChange2}
                value={newTodoValue2}

                />
              </div>

              <div className="mt-4 flex justify-between px-8">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-blue-200 hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={onSubmit}
                >
                  Send
                </button>
              </div>
              
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}
export {AddModal}