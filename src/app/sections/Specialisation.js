import React from 'react'
import FlowingMenu from '../components/Flowing-Menu/FlowingMenu'

const demoItems = [
    { link: '#', text: 'Animal Disease Reporting', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAi_prpIsYke1xSbnWGZndqBK4L1to3cAVA&s' },
    { link: '#', text: 'Livestock', image: 'https://cdn.pixabay.com/video/2024/05/21/212968_tiny.jpg' },
    { link: '#', text: 'Agriculture', image: 'https://st5.depositphotos.com/90406440/75647/i/450/depositphotos_756471166-stock-photo-female-farmer-inspecting-her-smart.jpg' },
    { link: '#', text: 'Housing Solutions', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4_zw__zgOasblK3oGM3huGYx8NLyDmiDDA&s' },
    { link: '#', text: 'Taxation', image: 'https://cdn.businessday.ng/2020/02/tax-.png' },
    { link: '#', text: 'Education', image: 'https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300=' },
    { link: '#', text: 'Revenue', image: 'https://www.shutterstock.com/image-photo/hand-touching-increase-revenue-button-260nw-1672448683.jpg' },
    { link: '#', text: 'Electricity', image: 'https://cdn.elearningindustry.com/wp-content/uploads/2024/10/Shutterstock_2430266101.jpg' }
  ];

export default function Specialisation() {
  return (
    <div className="container mx-auto">
    <h2 data-aos="fade-up" className="sm:text-5xl text-4xl px-7 pt-12 uppercase font-bold text-white mb-6">
      + Sectoral Specialisation

    </h2>
    <p data-aos="fade-up" className="text-lg text-white px-7 pb-3">
    Explore our diverse sectoral specializations and discover how our expertise can help drive your business forward.
        </p>
    
<div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>

</div>
  )
}
