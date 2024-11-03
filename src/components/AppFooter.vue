<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>拌豆bean © Copyright 2024</h4>
        <p>Slogan：拌豆一款更适合中国宝宝体质的下饭酱</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 拌豆bean. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  font-family: Arial, sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-section {
  margin: 10px;
}

.footer-section h4 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.footer-section p {
  font-size: 0.9em;
  line-height: 1.5;
}

.footer-bottom {
  padding: 10px 0;
  border-top: 1px solid #444;
  text-align: center;
  font-size: 0.8em;
}
</style>