$(document).ready(function(){
  $.get('https://portal.batchacademy.com/api/wdfne/amazoon-products', function(products){

    var productTemplate = $('template#product').html();
    for(var i = 0; i < products.length; i++){
      var newProduct = $(productTemplate);

      $('h2', newProduct).text(products[i].name);
      var newManufacturer = $('<span/>').addClass('manufacturer').text('by ' + products[i].manufacturer);
      $('h2', newProduct).append(newManufacturer);
      $('.image img', newProduct).attr('src', products[i].imageSrc);
      $('h3', newProduct).text(products[i].description);
      $('.price, .mobile-price', newProduct).text('$' + products[i].price.toFixed(2));
      
      $(newProduct).data('price', products[i].price)

      
      $('.cart').append(newProduct);
    }

    var updateView = function(){
      var productsInCart = $('.cart .product');
      var productsSaved = $('.saved .product');

      if(productsInCart.length === 0){
        $('.cart .empty').show();
        $('.cart-total').hide();
      } else {
        $('.cart .empty').hide();
        $('.cart-total').show();
      }

      if(productsSaved.length === 0){
        $('.saved .empty').show();
      } else {
        $('.saved .empty').hide();
      }

      
      var total = 0;
      $(productsInCart).each(function(){
        total += Number($(this).data('price'));

      });
      $('.cart-total span').text('$' + total.toFixed(2));
    }
    $('.move').on('click', function(){
      if($(this).parents().eq(4).hasClass('saved')){
        $(this).parents().eq(3).prependTo('.cart');
        $(this).text('Save for Later');
      } else {
        $(this).parents().eq(3).prependTo('.saved');
        $(this).text('Add to Cart');
      }
    updateView();
    });

    updateView();
  });
});

