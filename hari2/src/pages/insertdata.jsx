import magnifyingGlass from '../assets/search-magnifying-glass.svg'

function InsertData({dummy,setDummy,addDataSewa}){
    console.log(dummy)

    return (dummy.length > 0 &&(
        <div className="bg-bg flex min-w-max min-h-screen ">
            <a className='text-red-600' href="/insertdata">insertdata</a>
        <dialog id='modalBox' className='backdrop:bg-black'><p>penis</p></dialog>
        <div className="bg-customblack w-20 min-h-screen sticky  border-r border-customborder">
        </div>
        <div className="flex-col p-8 w-full">
            <div className="flex w-full">
                <div className="flex w-1/2">
                    <p className="text-customrouter">Dashboard - <span className="text-customtext font-semibold">Input Data</span></p>
                </div>
                <div className="flex pl-80 w-1/2">
                    <img className='absolute p-2' src={magnifyingGlass} alt="" />
                    <input className="h-fit w-full p-2 rounded-lg bg-customblack border border-customborder text-customtext focus:outline-none placeholder:text-customdarkertext pl-10" type="text" placeholder="Search"/>
                </div>
            </div>

            <div className='flex-col  p-8 mt-4 bg-customblack border border-customborder rounded-lg'>
                <div className='flex w-full justify-end'>
                    <div className='flex w-full gap-8 items-center'>
                    <button onClick={()=>{
                        addDataSewa()
                    }} className='bg-customtext text-customblack font-semibold p-2 px-4 rounded-lg cursor-pointer hover:bg-customrouter'>Insert Data</button>
                    <a href="" className='text-base font-normal text-customtext'>Previous</a>
                    <a href="" className='text-base font-normal text-customtext'>1</a>
                    <a href="" className='text-base font-normal text-customtext'>Next</a>
                    <input onChange={(event)=>{console.log(event.target.value)}} placeholder='Filter Alat Sewa' className='text-base p-2 px-4 text-customtext bg-customblack border border-customborder rounded-lg w-fit placeholder:text-customtext ' list='filter' />
                    <datalist id='filter'>
                    <option value="Excavator"></option>
   
                    </datalist>
                    </div>
                    <div className='flex  '>
                    <button className='text-base bg-customblack border border-customborder text-customtext font-semibold p-2 px-4 rounded-lg cursor-pointer hover:bg-customborder'>Excel</button>
                    </div>
                    
                </div>
                <div className='flex w-full pt-4'>
                    <table className='w-full table-auto '>
                        <thead>
                        <tr className='border-b-2 border-customtableline'>
                            <td className='text-sm text-customdarkertext font-light p-4'>Tanggal Sewa</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Pelanggan</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>No Hp</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Alat Sewa</td>
                            <td className='text-smtext-customdarkertext font-light p-4'>QTY</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Status</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Durasi</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Detail</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Edit</td>
                            <td className='text-sm text-customdarkertext font-light p-4'>Proses</td>
                        </tr>
                        </thead>

                        <tbody>
                        {dummy.map((e,index)=>{
                            console.log(e)
                            return  <tr key={index} className='border-b-2 border-customtableline'>
                            <td className='text-sm text-customtext font-light p-4'>{e.tanggalSewa}</td>
                            <td className='text-sm text-customtext font-light p-4 max-w-40'>{e.pelanggan}</td>
                            <td className='text-sm text-customtext font-light p-4'>{e.noHp}</td>
                            <td className='text-sm text-customtext font-light p-4 max-w-40'>{e.alatSewa}</td>
                            <td className='text-sm text-customtext font-light p-4'>{e.qty}</td>
                            <td className='text-sm text-customtext font-light p-4'>{e.status}</td>
                            <td className='text-sm text-customtext font-light p-4'>{e.durasi} Hari</td>
                            <td className='text-sm text-customtext font-light p-4 '> <button className='bg-customblack border border-customborder rounded-lg p-1 px-4 hover:bg-customborder'>Check</button></td>
                            <td className='text-sm text-customtext font-light p-4'><button className='bg-customblack border border-customborder rounded-lg p-1 px-4 hover:bg-customborder'>Edit</button></td>
                            <td className='text-sm text-customtext font-light p-4'><button className='bg-customtext text-customblack  border border-customborder px-4 rounded-lg p-1 hover:bg-customrouter'>Proses</button></td>
                        </tr>
                        })}


                       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

    </div>
    ))
    
}

export default InsertData;
