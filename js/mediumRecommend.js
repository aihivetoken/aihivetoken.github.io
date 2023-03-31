$(document).ready(function(){var dataPost={rss:"https://medium.com/feed/@TosaToken"}
$.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40TosaToken`,dataPost,function(response){if(response.status=='ok'){$.each(response.items,function(number,item){let content=item.content;let contentHandle=content.slice(0,120);$('#appendBlog').append(`
            <div class="col col-12 col-md-4">
            <div class="card blog-item shadow-sm">
              <a target="_blank" href="${item.link}">
                <div class="bd-placeholder-img card-img-top ">
                  <img style="max-width: 430px; max-height: 280px;" class="img-fluid" src="${item.thumbnail}"
                    alt="finance">
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="post-date">
                    ${item.pubDate}
                    </div>
                    <div class="divider"></div>
                    <small class="text-muted">
                        ${item.categories[0]}
                    </small>
                  </div>
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text text-content">
                     ${contentHandle} ...
                  </p>
                  <p class="card-text text-content">
                  ${item.author}
               </p>
                </div>
              </a>
            </div>
          </div>
          
            `);return number<2;});}});})