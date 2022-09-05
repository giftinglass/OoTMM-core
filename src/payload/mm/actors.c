#include <combo.h>

Actor* hookSpawnActorEx(void* const_1, GameState_Play* play, s16 actorId, float x, float y, float z, s16 rx, s16 ry, s16 rz, u16 variable, int unk1, int unk2, int unk3)
{
    if (actorId == AC_ITEM00 && (variable & 0xff) == 0x06)
    {
        actorId = AC_ITEM_CUSTOM;
        rz = 0x1000 | ((variable >> 8) & 0x7f);
        variable = GI_MM_HEART_PIECE;
    }
    return SpawnActorEx(const_1, play, actorId, x, y, z, rx, ry, rz, variable, unk1, unk2, unk3);
}