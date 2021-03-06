const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

const categoryColor = [
  {
    category: "animal",
    color: "blue"
  }
  ,{
    category: "beverage",
    color: "green"
  },
  {
    category: "food",
    color: "red"
  }
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const hook = $(".icons");
let layoutHtml = "";

// Milestone 1 con ciclo for
/* for (var i = 0; i < icons.length; i++) {
  layoutHtml += `
  <div>
    <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>
    <div class="title">${icons[i].name}</div>
  </div>`;
}
hook.append(layoutHtml); */
// /Milestone 1 con ciclo for

// Milestone 1 con ciclo forEach
/*
const hook = $(".icons");
let layoutHtml = "";

icons.forEach((item) => {

  let {name, family, prefix} = item;

  layoutHtml += `
<div>
  <i class="${family} ${prefix}${name}"></i>
  <div class="title">${name}</div>
</div>`;
});
hook.append(layoutHtml);
*/
// /Milestone 1 con ciclo forEach

// Milestone 2
// Coloriamo le icone per tipo

// Creata array Icons con aggiunta chiave color
const coloredIcons = icons.map((item) => {

  categoryColor.forEach((element) =>{
    if(item.category == element.category){
      item.color = element.color;
    }
  });
  return(item)
});
// /Creata array Icons con aggiunta chiave color

// Stampa array con icone colorate
coloredIcons.forEach((item) => {

  let {name, family, prefix, color} = item;
  layoutHtml += `
<div>
  <i class="${family} ${prefix}${name}" style= "color: ${color}"></i>
  <div class="title">${name}</div>
</div>`;
});
hook.append(layoutHtml);
// /Stampa array con icone colorate

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// Creata array di icons.category con struttura option Html
const selectHook = $("select#type");
let optionsSelect = [];

icons.forEach((item) =>{
  if(!(optionsSelect.includes(item.category))){
    optionsSelect.push(item.category);
  }
});

optionsSelect.forEach((item) =>{
  item = `
<option value = "${item}"> ${item} </option>`;
  selectHook.append(item);
});
// /Creata array di icons.category con struttura option Html

selectHook.change( function(){
  // Array di icone con la chiave category selezionata
  var selectedOption = $(this).val();

  const selectedIcons = coloredIcons.filter((icon) => {
    
    return icon.category == selectedOption
    // if(selectedOption == icon.category){
    //   return icon
    // }
  });
  // Array di icone con la chiave category selezionata

  // Stampa array icone selezionate
  hook.html("");
  let layoutHtml = "";

  selectedIcons.forEach((item) => {

    let {name, family, prefix, color} = item;

    layoutHtml += `
  <div>
    <i class="${family} ${prefix}${name}" style= "color: ${color}"></i>
    <div class="title">${name}</div>
  </div>`;
  });
  hook.append(layoutHtml);
  // /Stampa array icone selezionate
});
