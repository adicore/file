
let country=''; 
let json='';
let currenturl= $('#currenturl').val();
(function ($) {
	"use strict"; 
      	MyMap();
		AllData();
           $('#search_country').keyup(function(){  
                search_table($(this).val());  
           });  
           function search_table(value){  
                $('.single-country-list').each(function(){  
                     var found = 'false';  
                     $(this).each(function(){  
                          if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                          {  
                               found = true;  
                          }  
                     });  
                     if(found == true)  
                     {  
                          $(this).show();  
                     }  
                     else  
                     {  
                          $(this).hide();  
                     }  
                });  
           } 

	   function AllData(){
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			type: 'POST',
			url: currenturl+'/get-country',
			dataType: 'json',		
			success: function(response){ 
				$('#load').hide();
				json=response;
				let totalCases=0;
				let TotalDeaths=0;
				let TodaysCases=0;
				let todayDeaths=0;
				let recovered=0;
				let critical=0;

				$.each(response, function(index, value){
					$("#country-list").append("<div class='single-country-list'><a href='javascript:void(0)' onclick='CountryInfo("+index+")'><div class='country-name'><span>"+value.country+"</span><span class='city f-right'>Cases "+value.cases+"</span></div></a></div><input type='hidden' id='countryID"+index+"' value="+value.country+">");
					let cases = totalCases + value.cases;
					totalCases = cases;	 

					let death=TotalDeaths + value.deaths;
					TotalDeaths = death;

					let todaycasess=TodaysCases + value.todayCases;
					TodaysCases = todaycasess;

					let todaydthss=todayDeaths + value.todayDeaths;
					todayDeaths = todaydthss;

					let recovereds=recovered + value.recovered;
					recovered = recovereds;

					let todaycritical=critical + value.critical;
					critical = todaycritical;
				});
				$('#death').html(TotalDeaths);
				$('#Totalcases').html(totalCases);
				$('#Toatalrecovered').html(recovered);
				$('#TodaysCases').html(TodaysCases);
				$('#critical').html(critical);
				$('#todayDeaths').html(todayDeaths);
			}
		})		
	}


})(jQuery);	  

//report by country 
function CountryInfo(par){
		$('#load').show();
		let ids= $('#countryID'+par).val();
		country=ids;
		MyMap();
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			type: 'POST',
			url:  currenturl+'/get-info-country/'+ids,
			dataType: 'json',		
			success: function(response){ 
				$('#load').hide();
				$('#death').html(response.deaths);
				$('#Totalcases').html(response.cases);
				$('#Toatalrecovered').html(response.recovered);
				$('#TodaysCases').html(response.todayCases);
				$('#critical').html(response.critical);
				$('#todayDeaths').html(response.todayDeaths);
				
			}	
		})	
	}
//map load
function MyMap(){
		if (country != '') {
			let url ="https://maps.google.com/maps?q="+country+"&output=embed"; 
			let map="<iframe class='map-size' src="+url+" style='border:0;' allowfullscreen=''></iframe>";
			$('#map').html(map);
		}
		else{
			let map="<iframe class='map-size' src='https://maps.google.com/maps?q=&output=embed' style='border:0;' allowfullscreen=''></iframe>";
			$('#map').html(map);
		}		
	}



	

	
