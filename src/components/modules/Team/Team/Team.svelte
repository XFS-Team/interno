<script lang="ts">
  import TeamMember from "./TeamMember.svelte";

  const teamMembers = [
    {
      image: "/images/Team/Member/member_1.png",
      name: "Charlotte Levi",
      position: "Design, Australia",
      socials: ["facebook", "twitter"],
    },
    {
      image: "/images/Team/Member/member_2.png",
      name: "Nattasha Julie",
      position: "Design, Australia",
      socials: ["facebook", "twitter", "linkedin"],
    },
    {
      image: "/images/Team/Member/member_3.png",
      name: "John Smith",
      position: "Design, Australia",
      socials: ["facebook", "twitter"],
    },
    {
      image: "/images/Team/Member/member_4.png",
      name: "Nora Owen",
      position: "Design, Australia",
      socials: ["facebook", "twitter"],
    },
    {
      image: "/images/Team/Member/member_5.png",
      name: "Sofia Carter",
      position: "Design, Australia",
      socials: ["facebook", "twitter"],
    },
    {
      image: "/images/Team/Member/member_6.png",
      name: "Avery Jackson",
      position: "Design, Australia",
      socials: ["facebook", "twitter", "linkedin"],
    },
    {
      image: "/images/Team/Member/member_7.png",
      name: "Luna	James",
      position: "Design, Australia",
      socials: ["facebook", "twitter"],
    },
    {
      image: "/images/Team/Member/member_8.png",
      name: "Gianna Mateo",
      position: "Design, Australia",
      socials: ["facebook", "twitter"],
    },
  ];
</script>

<div
  class="container flex flex-wrap justify-center gap-x-[22px] gap-y-12 my-[50px] lg:my-[200px]"
>
  {#each teamMembers as teamMember}
    <TeamMember {...teamMember} />
  {/each}
</div>
