// XHR API FUNCTION START
function xhrAPICall(url, type, callBackFunc = null, formdata = null) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callBackFunc(this);
    }
  };
  xhr.open(type, url, true);
  if (type === "POST") {
    xhr.send(formdata);
  } else {
    xhr.send();
  }
}
// XHR API FUNCTION END

$("#enter").click(function (e) {
  let keyword = $('#keyword').val();
  if (keyword.trim() == '') {
    $('#keyword-label').html('Enter a keyword');
    $('#keyword').focus()
  } else {
    $('#keyword-label').html('');
    getCounter(keyword);
  }
});

$('#keyword').keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    let keyword = $('#keyword').val();
    if (keyword.trim() == '') {
      $('#keyword-label').html('Enter a keyword');
      $('#keyword').focus()
    } else {
      $('#keyword-label').html('');
      getCounter(keyword);
    }
  }
});

function getCounter(keyword) {
  let baseUrl = window.location.pathname;
  baseUrl = baseUrl.replace('index.php', '');
  let url = baseUrl + 'api.php';
  let type = 'POST';
  let data = new FormData();
  data.append("keyword", keyword);
  function getCounter(res) {
    const response = JSON.parse(res.responseText);
    if (response.status) {
      var count = response.count;
      $('#count').html(count);
      $('#keyword-enter').html(keyword);
      if (count == 0) {
        $('#pattern').html('');
      } else {
        createPattern(count);
      }
    } else {
      $('#count').html(0);
      $('#keyword-enter').html('');
    }
  }
  xhrAPICall(url, type, getCounter, data);
}

function createPattern(c) {
  let count = parseInt(c);
  let tableHtml = '';
  let n = count + (count - 1);

  for (row = 1; row <= n; row++) {
    tableHtml += '<tr>';
    for (col = 1; col <= n; col++) {
      if (row == 1 || row == n) {
        if (col > count) {
          tableHtml += '<td>' + (n - col + 1) + '</td>';
        } else {
          tableHtml += '<td>' + col + '</td>';
        }
      } else if (col == 1 || col == n) {
        if (row > count) {
          tableHtml += '<td>' + (n - row + 1) + '</td>';
        } else {
          tableHtml += '<td>' + row + '</td>';
        }
      } else {
        if ((row + col) != (count * 2) && row != col) {
          tableHtml += '<td class="null"></td>';
        } else if (row > count) {
          tableHtml += '<td>' + (n - row + 1) + '</td>';
        } else {
          tableHtml += '<td>' + row + '</td>';
        }
      }
    }
    tableHtml += '</tr>';
  }

  $('#pattern').html(tableHtml);
}
