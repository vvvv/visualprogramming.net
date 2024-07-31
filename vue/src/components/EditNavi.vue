<script setup>
    const props = defineProps(['sections'])

    const sections = ["Basics", "Work for", "For Hire", "Companies", "Educational Institutions"]
    const active = defineModel()
</script>

<template>
    <div class="d-block d-md-none">
        <!-- <div class="row">
            <button v-for="s in sections" class="btn btn-sm ml-3" :class="active==s ? 'btn-secondary' : 'btn-outline-secondary'" href="#" @click="active = s">{{ s }}</button>
        </div> -->

        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                {{ active }}
            </button>
            <div class="dropdown-menu">
                <a v-for="s in sections" class="dropdown-item" href="#" @click="active = s">{{ s }}</a>
            </div>
        </div>

        <hr class="mt-3"/>
    </div>
    
    <div class="nav flex-column nav-pills d-none d-md-block" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a v-for="s in sections" @click="active = s" class='nav-link' :class=" s == active ? 'active' : ''" href='#' role="tab">{{ s }}</a>
    </div>

</template>