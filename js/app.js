function addItems() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
    $(".shopping-list",).append(`<li>
    <span class="shopping-item">${userTextElement.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    userTextElement.val("");
  });  
}

$(addItems);

function toggleCheck() {
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    const targetCheck = $(event.currentTarget).parent().siblings('.shopping-item');
    targetCheck.toggleClass('shopping-item__checked');
    });
}

$(toggleCheck);

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  $(event.currentTarget).closest('li').remove();
});


