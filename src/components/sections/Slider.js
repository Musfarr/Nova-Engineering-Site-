import React from 'react'

const Slider = () => {
  return (
    <div>
        <div class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1" uk-slider = " autoplay :true autoplay-interval : 2000" >

<ul class="uk-slider-items uk-grid">
    <li class="uk-width-1-3">
        <div class="uk-panel">
            <img src="images/01.jpg" width="600" height="400" alt=""/>
            {/* <div class="uk-position-center uk-panel"><h1>1</h1></div> */}
        </div>
    </li>
    <li class="uk-width-1-3">
        <div class="uk-panel">
            <img src="images/02.jpg" width="600" height="400" alt=""/>
            {/* <div class="uk-position-center uk-panel"><h1>2</h1></div> */}
        </div>
    </li>
    <li class="uk-width-1-3">
        <div class="uk-panel">
            <img src="images/03.jpg" width="600" height="400" alt=""/>
        </div>
    </li>
    <li class="uk-width-1-3">
        <div class="uk-panel">
            <img src="images/04.jpg" width="600" height="400" alt=""/>
        </div>
    </li>
    <li class="uk-width-1-3">
        <div class="uk-panel">
            <img src="images/01.jpg" width="600" height="400" alt=""/>
        </div>
    </li>
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slider-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slider-item="next"></a>

</div>
      
    </div>
  )
}

export default Slider
