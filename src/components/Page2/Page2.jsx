import React from 'react'

// Reusable Card Component
const Card = ({ title, content }) => {
  return (
    <div className='w-[47%]'>
      <div className=''>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-xl py-[3%]'>{content}</p>
        <button className="px-4 py-2 text-white bg-blue-400 border border-blue-400 rounded-md hover:text-blue-400 hover:bg-white transition">
          Learn more
        </button>
      </div>
    </div>
  )
}

const Page2 = () => {
  const cardData = [
    {
      title: 'Sed ut perpistics',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore impedit hic magni earum? Deleniti aliquid quia itaque, doloremque illum harum nisi voluptas, cum omnis, amet ab nam. Error, ipsum?'
    },
    {
      title: 'Sed ut perpistics',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi illum possimus rerum aspernatur doloribus consequuntur aut aliquam ratione vero cum ad distinctio amet voluptates animi, illo voluptatum, voluptatem consequatur?'
    },
    {
      title: 'Sed ut perpistics',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore impedit hic magni earum? Deleniti aliquid quia itaque, doloremque illum harum nisi voluptas, cum omnis, amet ab nam. Error, ipsum?'
    },
    {
      title: 'Sed ut perpistics',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi illum possimus rerum aspernatur doloribus consequuntur aut aliquam ratione vero cum ad distinctio amet voluptates animi, illo voluptatum, voluptatem consequatur?'
    }
  ]

  return (
    <div className='mb-[9%]'>
      {/* Two Rows of Cards */}
      {cardData.map((item, index) => (
        <div key={index} className='mt-[3%] ml-[4%] flex justify-center items-center gap-[5%]'>
          <Card title={item.title} content={item.content} />
          <Card title={item.title} content={item.content} />
        </div>
      ))}

      {/* Bottom Bar */}
      <div className='h-[5vw] mt-[5%] bg-zinc-200' />
    </div>
  )
}

export default Page2
