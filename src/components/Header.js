export default function Header({handlePrint}) {
    return (
      <>

        <header className=" flex-col items-center justify-end  xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3 ">
              Invoicer
            </h1>
          </div>

          <div>
            <ul className=" items-end justify-end flex-wrap">
              <li>
                <div className="editbutton">
                <button onClick={handlePrint} className=" font-bold text-gray-400 py-1 px-5 rounded shadow border-2  hover:text-gray-500 transition-all duration-300">
                  Print
                </button>
                </div>
              </li>
              {/* <li className="mx-2">
                <button className="bg-blue-500 font-bold text-white  py-2 px-8 rounded shadow border-2 border-blue-400 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Download</button>
              </li>
              <li>
                <button className="bg-green-500 font-bold text-white  py-2 px-8 rounded shadow border-2 border-green-400 hover:bg-transparent hover:text-green-500 transition-all duration-300">Send</button>
              </li> */}
            </ul>
          </div>
        </header>

        
      </>
    );
  }
  