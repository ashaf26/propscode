<script setup>
import HeaderItem from '../components/HeaderItem.vue'
import SkillItem from '../components/SkillItem.vue'
import BuySourscode from '../components/BuySourscode.vue'
import FaqItem from '../components/FaqItem.vue'
import PaketItem from '../components/PaketItem.vue'
import PelatihanCodingItem from '../components/PelatihanCodingItem.vue'
import BreadcrumbItem from '../components/BreadcrumbItem.vue'
</script>

<template>
  <HeaderItem />
  <BreadcrumbItem />
  <SkillItem />
  <BuySourscode />
  <PaketItem class="d-none d-lg-block" />
  <PelatihanCodingItem class="d-block d-lg-none" />
  <FaqItem />
</template>

<style scoped></style>
