import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import cover from './../../../images/cover/cover-01.png';
import useUser from '../../../hooks/useUser/useUser';
import AvaterImg from './../../../assets/images/placeholder.jpg';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import usePaymentHistory from '../../../hooks/usePayment/usePaymentHistory';
import useUserPrint from '../../../hooks/useUser/useUserPrint';
import usePayment from '../../../hooks/usePayment/usePayment';

const Profile = () => {
    const [isUser] = useUser();
    const [AllPayment,] = usePayment(`${isUser?.cuetId}`)
    const [UserPrints,refetch] = useUserPrint()
      const totalblacksingle = UserPrints.reduce((total,item)=> total + item.blacksingle,0)
      const totalblackdouble = UserPrints.reduce((total,item)=> total + item.blackdouble,0)
      const totalfront = UserPrints.reduce((total,item)=> total + item.front,0)
      const totalgraph = UserPrints.reduce((total,item)=> total + item.graph,0)
      const totalcolor = UserPrints.reduce((total,item)=> total + item.color,0)

    const data = [
      {
        name: `${isUser?.cuetId}`,
        total: `${AllPayment[0]?.total}`,
        paid: `${AllPayment[0]?.paid}`,
        due: `${AllPayment[0]?.due}`,
      }
    ];
    const data1 = [
      {
        name: `${isUser?.cuetId}`,
        Black_Single: `${totalblacksingle}`,
        Black_Double: `${totalblackdouble}`,
        Front: `${totalfront}`,
        Graph: `${totalgraph}`,
        Color: `${totalcolor}`,
      }
    ]
    
    return (
        <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-8 h-35 md:h-65">
          <img
            src={cover}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="w-full px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className='relative bg- flex flex-col items-center z-10 rounded-full' >
            <div className="absolute -top-14 border-8 border-gray-500/0.5 rounded-full">
              <img className="rounded-full w-28 h-28" src={isUser?.photourl || AvaterImg} alt="profile" />
            </div>
          </div>
          <div className="mt-20">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {isUser?.name}
            </h3>
            <p className="font-medium">{isUser?.cuetId}</p>
            <p className="font-medium">{isUser?.email}</p>
            <p className="font-medium">{isUser?.phone}</p>
          </div>
        </div>
      </div>
      <div className=''>
          <div className='w-3/4 lg:w-1/2 font-mono mx-auto'>
          <p className='text-center font-bold text-2xl mt-5'>Amount Information</p>
<div className="stats shadow mt-10">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Total Amount</div>
    <div className="stat-value">{`${AllPayment[0]?.total}`}</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Total Paid Amount</div>
    <div className="stat-value">{`${AllPayment[0]?.paid}`}</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Total Due Amount</div>
    <div className="stat-value">{`${AllPayment[0]?.due}`}</div>
  </div>
</div>

  <div className='md:flex lg:flex p-6 mt-10 shadow-2xl rounded-3xl'>
      <BarChart
          width={400}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="total" fill="blue" label={{ position: 'middle',fill:'white' }}>
          </Bar>
          <Bar dataKey="paid" fill="green" label={{ position: 'middle',fill:'white' }}>
          </Bar>
          <Bar dataKey="due" fill="red" label={{ position: 'middle',fill:'white' }} >
           
          </Bar>
      </BarChart>

  </div>
  </div>
          <div className='lg:w-2/3 mt-10 font-mono mx-auto'>
          <p className='text-center font-bold text-2xl mt-5'>Page Information</p>
<div className="stats shadow mt-10">
  <div className="stat">
    <div className="stat-title">Black (single)</div>
    <div className="stat-value">{totalblacksingle}</div>
  </div>
  <div className="stat">
    <div className="stat-title">Black (Double)</div>
    <div className="stat-value">{totalblackdouble}</div>
  </div>
  <div className="stat">
    <div className="stat-title">Front Page</div>
    <div className="stat-value">{totalfront}</div>
  </div>
  <div className="stat">
    <div className="stat-title">Graph Page</div>
    <div className="stat-value">{totalgraph}</div>
  </div>
  <div className="stat">
    <div className="stat-title">Color Page</div>
    <div className="stat-value">{totalcolor}</div>
  </div>
</div>
          <div className='lg:flex p-6 mt-10 mb-10 shadow-2xl rounded-3xl'>
      <BarChart
          width={600}
          height={300}
          data={data1}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Black_Single" fill="blue" label={{ position: 'middle',fill:'white' }} >
          </Bar>
          <Bar dataKey="Black_Double" fill="green" label={{ position: 'middle',fill:'white' }}>

          </Bar>
          <Bar dataKey="Front" fill="red" label={{ position: 'middle',fill:'white' }} >
          </Bar>
          <Bar dataKey="Graph" fill="green" label={{ position: 'middle',fill:'white' }} >
           
          </Bar>
          <Bar dataKey="Color" fill="red" label={{ position: 'middle',fill:'white' }}>
          
          </Bar>
      </BarChart>
      </div>
          </div>
      </div>
    </>

    );
};

export default Profile;