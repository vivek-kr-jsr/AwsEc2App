// upload.js

// Configure AWS SDK
AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'ap-south-1' // e.g., 'us-west-2'
  });
  
  // Create an S3 instance
  var s3 = new AWS.S3();
  
  // Function to handle file upload
  function handleFileUpload() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];
    
    // Create a unique key for the file in S3
    //var key = 'uploads/' + file.name;
    var key = file.name;
    
    // Set up S3 upload parameters
    var params = {
      Bucket: 'nagp.fileuploadapps.s3',
      Key: key,
      Body: file,
      ContentType: 'text/plain' // Change if needed
    };
  
    // Upload file to S3
    s3.upload(params, function(err, data) {
      if (err) {
        console.log('Error uploading file:', err);
      } else {
        console.log('File uploaded successfully:', data.Location);
      }
    });
  }
  
