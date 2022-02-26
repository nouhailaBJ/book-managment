import React from 'react'
import Title from '../components/Title'

function About() {
  return (
    <section className="section-padding gray">
    <Title title="About US" desc="You want to know More About Us " />
    <div className="container">
      <div className="row about-us">
        <div className='col-md-6'>
          <img src="/images/aboutUs.jpg" />
        </div>
        <div className="col-md-6">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Tellus id interdum velit laoreet id donec ultrices. Nec nam aliquam sem et tortor. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Libero justo laoreet sit amet cursus sit amet dictum sit. Senectus et netus et malesuada fames. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Id venenatis a condimentum vitae sapien. Id neque aliquam vestibulum morbi. Arcu non odio euismod lacinia at quis risus. Velit aliquet sagittis id consectetur purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Etiam sit amet nisl purus in mollis. Risus nullam eget felis eget nunc lobortis. Varius quam quisque id diam vel quam elementum pulvinar.
            </p>
            <p>
            Faucibus a pellentesque sit amet. Est ullamcorper eget nulla facilisi. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. A erat nam at lectus urna duis convallis convallis. Felis eget nunc lobortis mattis aliquam faucibus. Dui vivamus arcu felis bibendum ut tristique. Elit at imperdiet dui accumsan sit amet nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Duis at consectetur lorem donec massa sapien. Nisl suscipit adipiscing bibendum est ultricies integer quis. Nunc faucibus a pellentesque sit.
            </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About