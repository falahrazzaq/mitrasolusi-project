import './App.css';
import datas from './data.json';

export default function App() {
  console.log(datas);
  return (
    <div className='grid m-10 w-full'>
      <span className='font-bold text-2xl my-5 justify-self-center'> Let's See What <span className='underline'>IT Hardwares</span> We can offer</span>
      <div className='grid gap-2 justify-center text-center'>
        {datas.map((data,id) => (
          <div className='flex gap-5 h-40' key={id}>
            <div className={`grid border-2 rounded-md p-3 gap-2 w-1/6 ${data.color}` }>
              <span className='text-lg font-semibold '>{data.serviceName}</span>
              <p className='text-sm'>{data.description}</p>
              <button className='font-bold'>Get Yours ></button>
            </div>
            <div className='flex gap-2'> 
              {data.items.map((item, id) => (
                <div className='border-2 rounded-md'>
                <img 
                  src={item.imageURL} key={id}
                  alt="image"
                  className='h-[120px]'
                />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
      <div className='grid justify-items-center pt-5'>
        <span><span className='font-bold'>Didn't find what you were looking for?</span> Reach us to get your orders customized based on your IT needs</span>
        <button className='border-2 rounded-md border-green-700 w-52'>Contact our sales team</button>
      </div>
    </div>
  )
}