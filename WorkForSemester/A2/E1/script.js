/*The chosen reference image was picked becauyse of its simplicity. It looked like the easiest omption to pick and to work with ion the available timeframe of the assignment. */
/*I chose this particular grid layout because of the ways its layout can be manipulated. This gave the most accurate replication of the reference image layout possible in the timeframe available.*/
/*I chose this colour background fill because it differs from the conventional method of using the white background and then putting in black text or different coloured images to fill up its canvas.*/

.grid-container {
    display: grid;
    gap: 10px;
    background-color: #050806;
    padding: 10px;
  }
  
  /*These two colours were chosen because red and blue go well together. They are the cpolours from the logo of defunct plane maker, McDonnell Douglas, thus channelling my aviation interest.*/
  /*The red border will catch the viewers attention and then direct their eyes into what's inside the red border, being the blue square*/
  /*Numbers were used to number how many boxes there were to put in and also to help remember which item was which when sorting out sizes and dimensions. At a few points, some changes had to be made which had a ripple affect on other items.*/
  
  .grid-item {
    background-color: rgba(56, 99, 205);
    border: 10px solid rgba(197, 36, 67);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
  
  /*This ruleset was chosen because it was relatively simple to work it and it also gave the best ability to replicate the reference image, even if it's not totally precise.*/

  .item1 {
      grid-column: 1 / span 12;
      grid-row: 1 / span 40; 
  }
  
  .item2 {
      grid-column: 1 / span 12;
      grid-row: 100; 
  }
  
  .item3 {
      grid-column: 1 / span 4;
      grid-row: 101 / span 4; 
  }
  
  .item4 {
      grid-column: 5 / span 5;
      grid-row: 101; 
  }
  
  .item5 {
      grid-column: 5 / span 5;
      grid-row: 102; 
  }
  
  .item6 {
      grid-column: 5 / span 5;
      grid-row: 103;
  }
  
  .item7 {
      grid-column: 5 / span 8;
      grid-row: 104;
  }
  
  .item8 {
      grid-column: 10 / span 2;
      grid-row: 101; 
  }
  
  .item9 {
      grid-column: 10 / span 2;
      grid-row: 102; 
  }
  
  .item10 {
      grid-column: 10 / span 2;
      grid-row: 103; 
  }
  
  .item11 {
      grid-column: 12;
      grid-row: 101; 
  }
  
  .item12 {
      grid-column: 12;
      grid-row: 102; 
  }
  
  .item13 {
      grid-column: 12;
      grid-row: 103; 
  }
  
  .item14 {
      grid-column: 1 / span 4;
      grid-row: 105; 
  }
  
  .item15 {
      grid-column: 5 / span 3;
      grid-row: 105; 
  }
  
  .item16 {
      grid-column: 8 / span 2;
      grid-row: 105; 
  }
  
  .item17 {
      grid-column: 10 / span 2;
      grid-row: 105; 
  }
  
  .item18 {
      grid-column: 1 / span 6;
      grid-row: 106; 
  }
  
  .item19 {
      grid-column: 7 / span 6;
      grid-row: 106; 
  }
