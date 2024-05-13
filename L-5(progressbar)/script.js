$(document).ready(function () {

    $('#startButton').on("click  ", function () {

      $('#progressBar').css('width', '0%').attr('aria-valuenow', 0);

      let progress = 0;
      let interval = setInterval(function () {
        progress += 10;
        $('#progressBar').css('width', progress + '%').attr('aria-valuenow', progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 1000);
    });
  });