<script setup></script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <AppLogo class="header__logo" />

        <UButton
          class="header__button-category"
          color="primary"
          variant="solid"
          label="Категории"
          leading-icon="i-custom-menu"
          :ui="{
            leadingIcon: 'w-14 h-12',
          }"
        />

        <UButton
          class="header__button-login"
          color="secondary"
          variant="solid"
          label="Войти"
          leading-icon="i-custom-user"
          :ui="{
            leadingIcon: 'w-12 h-14',
          }"
        />

        <UButton
          class="header__button-cart"
          color="primary"
          variant="solid"
          label="Корзина"
          leading-icon="i-custom-shopping-cart"
          :ui="{
            leadingIcon: 'w-14 h-14',
          }"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
:deep(.header__button-login) {
  padding-inline: 30px;
  font-size: 14px;
  font-weight: 400;
}

:deep(.header__button-cart) {
  padding-inline: 20px;
  font-size: 15px;
  font-weight: 600;
}

:deep(.header__button-category) {
  font-size: 15px;
  font-weight: 600;
}
</style>
